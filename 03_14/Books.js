class Book {
    constructor (
        title, 
        author,
        pubYear,
        pageStatus,
        readStatus
    )
    {
        this.title = title; 
        this.author = author; 
        this.pubYear = pubYear; 
        this.pageStatus = pageStatus; 
        this.readStatus = readStatus
    }
    updatePageStatus(newPageStatus) {
        this.pageStatus = newPageStatus;
    }
    upadateReadStatus(newReadStatus) {
        this.readStatus = newReadStatus;
    }
}

export default Book; 
