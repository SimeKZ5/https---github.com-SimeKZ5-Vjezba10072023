export function odvojene() {
  const string3 = "treca";
  const string4 = "cetvrta";

  const concatenateStrings = () => {
    return `${string3} ${string4}`;
  };

  return (
    <div>
      <p>{string3}</p>
      <p>{string4}</p>
      <p>{concatenateStrings()}</p>
    </div>
  );
}

export default odvojene;
