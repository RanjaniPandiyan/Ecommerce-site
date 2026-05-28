function ExploreProducts({ id, images, name, price }) {
  return (
    <div className="col" key={id}>
      <div className="card hover-shadow">
        <img
          src={images}
          className="card-img-top p-3 img-fluid w-100"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-text text-center">₹{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
// this is destructuring props
