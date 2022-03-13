export default {
    name: "photoarchive",
    title: "Photo Archive",
    type: "document",
    fields: [
        {name: "date", title: "Date", type: "date"},
        {name: "image", title: "Image", type: "image"},
    ],
    preview: {
        select: {
          title: 'date'
        }
      }
}