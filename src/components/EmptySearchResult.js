const EmptySearchResult = (props) => {
    const { searchTerm } = props;
    console.log("props",props,searchTerm);
    return (
        <>
            <div>
                No results for "{searchTerm}".....
            </div>
        </>
    );
};

export default EmptySearchResult;