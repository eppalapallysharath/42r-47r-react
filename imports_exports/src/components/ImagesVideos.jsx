import logoimg from "../assets/images/logo.png";
import img1 from "../assets/images/ad-image-1.png";
import video1 from "../assets/videos/file_example_MP4_640_3MG.mp4";
import data from "../assets/data/fakedata.json"


export const Media = () => {
    console.log(data)

  return (
    <>
      <p>media</p>
      <img src={logoimg} alt="logo" />
      <img src={img1} alt="logo" />
      <img src="user.png" alt="" />
      <img src="vite.svg" alt="" />
      <img src="product-thumb-1.png" alt="" />
      <video controls>
        <source src="sample_960x400_ocean_with_audio.3gp" />
      </video>
      <video controls>
        <source src={video1} />
      </video>
     {data.map((element, index)=><div key={index}><p>{element.name} {element.class}</p></div>)}
    </>
  );
};
