const postData = async (url, body) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: body
    });
    
    return await res.json();
};

export default postData;