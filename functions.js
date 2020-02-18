const titleToSlug = title => (
    title
    // replace characters that are not letters, numbers or whitespaces
    // with empty strings
    .replace(/[^a-z0-9 ]/ig, "")
    //replace whitespaces with hyphens
    .replace(/\s/g, "-")
    // replace double hyphens with one
    .replace(/--/g, "-")
    // change to lowercase
    .toLowerCase()
)

module.exports = {
    titleToSlug
}