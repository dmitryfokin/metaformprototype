({
  //access: 'public',

  method: async ({ hook, idForm }) => {
    console.debug('idForm');
    console.debug(idForm);
    const data = await lib.workspace.runFormHook.method(
      { context, hook, idForm }
    );
    
    // context.client.emit('workspace/formDataUpload', {idForm, ...data});  

    return {};
    //return { deltaChange: { ...data } };
  },
});
