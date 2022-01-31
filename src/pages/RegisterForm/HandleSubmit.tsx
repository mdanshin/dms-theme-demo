export default function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      fullname: data.get('fullname'),
      email: data.get('email'),
      login: data.get('username'),
      country: data.get('country'),
      agree: data.get('agree'),
    });
  };