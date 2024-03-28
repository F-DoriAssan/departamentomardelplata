// import type {
//   NextApiRequest,
//   NextApiResponse,
// } from 'next';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { name, message } = req.body
 
//   try {
//     await handleFormInputAsync({ name, message })
//     res.redirect(307, '/')
//   } catch (err) {
//     res.status(500).send({ error: 'Failed to fetch data' })
//   }
// }