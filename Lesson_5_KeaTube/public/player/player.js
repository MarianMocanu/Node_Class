const url = window.location.href;
let videoId = url.substr(url.lastIndexOf("/") + 1);

$.get(`/videos/${videoId}`)
    .done(data => { 

        $("#title").text(data.response.title)

        const player = `<video controls id="player">
                    <source src="/${videoId}">
                    Your browser does not support the video tag.
                </video>`;

        $("#player").append(player);

        $("#description").text(data.response.description);
    })
    .catch(error => { 
        console.log(error);
        $("#title").text("Couldn't find the video");
    })






