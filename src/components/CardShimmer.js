const ResCard = () => {
    return (
        <div className="res-card">
            <img />
            <h3></h3>
            <h5></h5>
            <h4></h4>
            <h4></h4>
        </div>
    );
};
const CardShimmer = () => {
    return (
        <div className="body-container">
            <div className="Search"></div>
            <div className="res-container">
               <ResCard />
               <ResCard />
               <ResCard />
               <ResCard />
               <ResCard />
               <ResCard />
               <ResCard />
               <ResCard />
               <ResCard />
               <ResCard />
            </div>
         </div>
    );
};

export default CardShimmer;