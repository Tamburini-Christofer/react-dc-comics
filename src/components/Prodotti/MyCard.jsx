const MyCard = (props) => {

    const {thumb, series, title} = props.comicProp;

    return (
        <div className="card">
            <img src= {thumb} alt={title} />
              <span>{series}</span>
              </div>
    )
}
export default MyCard;
