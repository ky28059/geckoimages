// GET /api/
// Returns a list of all gecko images

import {NextApiRequest, NextApiResponse} from 'next';
import {listAllAsGeckoImages} from '../../util/driveUtils';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const files = await listAllAsGeckoImages();
    if (!files) res.status(500).json({message: 'Error: failed to fetch files'});
    res.status(200).json(files);
}
