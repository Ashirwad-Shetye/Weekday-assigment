import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

  const { limit = 10, offset = 10 }: { limit?: number; offset?: number } = req.body;

  try {
    const response = await axios.post( "https://api.weekday.technology/adhoc/getSampleJdJSON", {
      limit,
      offset
    } );

    res.status( 200 ).json( { data: response.data } );
  } catch ( error ) {
    res.status( 500 ).json( { error} );
    console.error( error );
  }
}
