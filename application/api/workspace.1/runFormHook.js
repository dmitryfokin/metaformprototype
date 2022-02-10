({
  //access: 'public',

  method: async ({ hook, idForm }) => {
    const data = await lib.workspace.runFormHook(
      { context, hook, idForm }
    );
    
    // context.client.emit('workspace/formDataUpload', {idForm, ...data});  

    return {};
    //return { deltaChange: { ...data } };
  },
});
