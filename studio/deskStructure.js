import S from "@sanity/desk-tool/structure-builder";
// Add Schema type to hidden
const hiddenDocTypes = listItem =>
  !["page", "siteconfig",].includes(
    listItem.getId()
  );

// Render a custom UI to view siteconfig & pages 
// and showing other items except mentioed in the hiddendoctypes
export default () =>
  S.list()
    .title("Content Manager")
    .items([
      S.listItem()
        .title("Site config")
        .icon(HiOutlineCog)
        .child(
          S.editor()
            .schemaType("info")
            .documentId("info")
        ),
      // Add a visual divider (optional)
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);