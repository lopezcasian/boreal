export async function getBlogs(){
    let res = await fetch( process.env.NEXT_PUBLIC_API_URL + '/blogs' )
    return await res.json();
}

export async function getBlogIds(){
    let res = await fetch( process.env.NEXT_PUBLIC_API_URL + '/blogs' )
    let json = await res.json();
    return json.map(blog => {
        return {
          params: {
            id: blog.id
          }
        }
      })
}

export async function getBlog( id ){
    let res = await fetch( process.env.NEXT_PUBLIC_API_URL + '/blogs/' + id )
    console.log( res );
    let json = await res.json();
    console.log( json );
    return json
}