import domtoimage from "dom-to-image";

const downloadImage = () => {
  domtoimage
    .toJpeg(document.getElementById("download"), { quality: 0.95 })
    .then(function(dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
};

export default downloadImage;
