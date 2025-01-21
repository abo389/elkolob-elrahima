export default function Contact ()
{
  return <>
    <h2 className="my-20 text-4xl text-center">Contact us</h2>
    <form action="" className="w-2/3 mx-auto flex justify-between items-center flex-col gap-4">
      <input type="text" placeholder="name" className="input input-bordered w-full" />
      <input type="text" placeholder="email" className="input input-bordered w-full" />
      <textarea placeholder="message" rows='10' className="textarea textarea-bordered w-full"></textarea>
      <button className="btn btn-primary">Send</button>
    </form>
  </>;
}