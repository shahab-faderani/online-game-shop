import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl = (url: string, width: number = 600, height: number = 400) => {
  if (!url) return noImage;
    const target ='media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
};

export default getCroppedImageUrl;
