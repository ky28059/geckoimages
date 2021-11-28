/**
 * File to leverage drive API for geckoimage backend
 * Requires the `SERVICE_ACCOUNT_CONFIG` environment variable to be the stringified config JSON
 */

import {existsSync, writeFileSync} from 'fs';
import {drive_v3, google} from 'googleapis';


// If no config JSON exists, create it from environment variables
// Dumb hack because `google.auth.GoogleAuth` requires a file to authenticate a service account
if (!existsSync('tmp/geckoimages-service-account-credentials.json')) {
    console.log(process.env.SERVICE_ACCOUNT_CONFIG)
    writeFileSync('tmp/geckoimages-service-account-credentials.json', process.env.SERVICE_ACCOUNT_CONFIG!);
}

const auth = new google.auth.GoogleAuth({
    keyFile: 'tmp/geckoimages-service-account-credentials.json',
    scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file'
    ],
});

export const drive = google.drive({
    version: 'v3',
    auth
});


export type GeckoImage = {
    name: string, number: string, mimeType: string, alternate: boolean,
    author: string, created: string, url: string, driveUrl: string
}

// Returns a GeckoImage[] of all gecko images from drive service account
export async function listAllAsGeckoImages() {
    const params = {
        orderBy: 'name desc',
        fields: 'nextPageToken, files(name, description, mimeType, createdTime, owners, webViewLink, webContentLink)',
        q: 'mimeType contains \'image\'',
    };

    let r = await drive.files.list(params);
    const files = r.data.files;
    if (!files) return;

    while (r.data.nextPageToken) {
        r = await drive.files.list({
            ...params,
            pageToken: r.data.nextPageToken
        });

        if (!r.data.files) break;
        files.push(...r.data.files);
    }

    return files.map(convertFileToGecko);
}

// Converts a Google API response to a Gecko object
export function convertFileToGecko(file: drive_v3.Schema$File): GeckoImage {
    const number = file.name!.match(/(.+?)_/)![1];

    // If the author did not upload the image to the folder, assume their name is in the file description
    const author = file.description || file.owners![0].displayName!;

    return {
        name: file.name!, number, url: file.webContentLink!, mimeType: file.mimeType!, alternate: number.includes('b'),
        author, created: file.createdTime!, driveUrl: file.webViewLink!
    }
}
