type Thing = {
  id: string | number;
  name: string;
};

try {
  const widget: Thing = {
    id: false,
    name: 'Widget'
  };
} catch(err) {
  console.log(`%c⚠️ Flow runtime error ⚠️ \n\n${err.message}`, 'background: white; color: red');
}
