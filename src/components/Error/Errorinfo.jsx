export default function ErrorInfo({ message }) {
    return (
      <div role="alert" >
        <p>{message}</p>
      </div>
    );
  }