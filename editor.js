tinymce.init({
  selector: "textarea",  // change this value according to your HTML.
  plugins: "advlist lists",
  menubar: "insert",
  menu: {
    insert: { title: "Insert", items: "bullist numlist" },
  },
  toolbar: "bullist numlist",

  setup: (editor) => {
    
    editor.ui.registry.addMenuItem("bullist", {
      text: "Bullet list",
      icon: "unordered-list",
      onAction: function() {
        tinymce.activeEditor.execCommand('ApplyUnorderedListStyle', false, { "list-style-type": "disc", });
      }
    });

    editor.ui.registry.addMenuItem("numlist", {
      text: "Numbered list",
      icon: "ordered-list",
      onAction: function() {
        tinymce.activeEditor.execCommand('ApplyOrderedListStyle', false, { "list-style-type": "decimal", });
      }
    });
    
  },
});
