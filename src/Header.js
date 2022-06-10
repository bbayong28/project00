


const Header = () => {

  const data = [
    { id: 1, conent: "나는 바보다" },
    { id: 2, conent: "나는 천재다" },
    { id: 3, conent: "나는 메로나다" },
    { id: 4, conent: "나는 고등어다" },
  ];

  const Babodata = () => {
    data.map(el => (
      <li key={el.id}>
        <strong>{el.conent}</strong>
      </li>
    ));
  }

  const Nasome = () => {
    return (
      <h3>나는 왕메로나다.</h3>
    )
  };


  const Baaaa = () => { 
    return (
      data.slice(0, 2).map(el => (
        <li key={el.id}>
          <strong>{el.conent}</strong>
        </li>
      ))
    )
  }

  return (
    <>
      <Nasome />
      <ul>
        {Babodata}
      </ul>
      <Baaaa />
    </>
   );
  
}

export default Header;