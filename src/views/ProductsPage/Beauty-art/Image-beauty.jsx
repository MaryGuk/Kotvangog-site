const ImageBeauty = (props) => {
  return (
    <div className="beauty-art__gallery">
      <div onClick={() => props.setOpenImageDialog(true)}>
        <img
          className="beauty-art__image"
          src="/images/styles/Бьюти-арт/1 ba.jpg"
          alt=""
        />
      </div>

      <img
        className="beauty-art__image"
        src="/images/styles/Бьюти-арт/2 ba.jpg"
        alt=""
      />
      <img
        className="beauty-art__image"
        src="/images/styles/Бьюти-арт/3 ba.jpg"
        alt=""
      />
      <img
        className="beauty-art__image"
        src="/images/styles/Бьюти-арт/4 ba.jpg"
        alt=""
      />
      <img
        className="beauty-art__image"
        src="/images/styles/Бьюти-арт/5 ba.jpg"
        alt=""
      />
      <img
        className="beauty-art__image"
        src="/images/styles/Бьюти-арт/6 ba.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageBeauty;
