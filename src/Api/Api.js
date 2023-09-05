

// const url = "https://accounts.spotify.com/api/token";
// const headers = {
//   "Content-Type": "application/x-www-form-urlencoded",
// };

// const data = new URLSearchParams();
// data.append("grant_type", "client_credentials");
// data.append("client_id", process.env.REACT_APP_CLIENT_ID);
// data.append("client_secret", process.env.REACT_APP_CLIENT_SECRECT);

// export const TokenEndpoint=async()=>{
//     try{
//         let responce=await  fetch(url, {
//             method: "POST",
//             headers: headers,
//             body: data,
//           })
//           let datas=await responce.json()
//           return datas
//     }catch(err){
//         console.log(err);
//     }
   
       
      
// }


// export const GetArtist = async (data) => {
//     try {
//       console.log(data);
//       const token = data?.access_token;
//       const type = data?.token_type;
  
//       if (!token || !type) {
//         throw new Error('Access token or token type is missing.');
//       }
  
//       const artistId = '1mYsTxnqsietFxj1OgoGbG';
//       const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
//       const header = {
//         'Authorization': `${type} ${token}`,
//       };
  
//       // Fetch artist's albums
//       const albumsResponse = await fetch(url, {
//         method: 'GET',
//         headers: header,
//       });
  
//       if (!albumsResponse.ok) {
//         throw new Error(`Failed to fetch artist's albums. Status: ${albumsResponse.status}`);
//       }
  
//       const albumsData = await albumsResponse.json();
  
//       // Check if there are albums
//       if (albumsData.items && albumsData.items.length > 0) {
//         const firstAlbumHref = albumsData.items[0].href;
  
//         // Fetch tracks of the first album
//         const tracksResponse = await fetch(`${firstAlbumHref}/tracks`, {
//           method: 'GET',
//           headers: header,
//         });
  
//         if (!tracksResponse.ok) {
//           throw new Error(`Failed to fetch album tracks. Status: ${tracksResponse.status}`);
//         }
  
//         const tracksData = await tracksResponse.json();
//         console.log('gggff',tracksData);
//         if (tracksData.items && tracksData.items.length > 0) {
//            let findTrack= tracksData.items[0].href
//         let tracks=await fetch(findTrack,{
//             method:'get',
//             headers:header
//            })
//            let resp=await tracks.json()
           
//            return resp.preview_url
//         } else {
//           throw new Error('No tracks found for the first album.');
//         }
//       } else {
//         throw new Error('No albums found for the artist.');
//       }
//     } catch (error) {
//       console.error(error);
//       return undefined;
//     }
//   };
  