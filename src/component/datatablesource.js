export const userColumns = [
    // { field: '', headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image? params.row.image : "https://www.portmelbournefc.com.au/wp-content/uploads/2022/03/avatar-1.jpeg"} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    { field: 'country', headerName: "Country", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  
  ];
  
  export const productColumns = [
    // { field: '', headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "TITLE",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image? params.row.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDF9695aEHL20tZNMzJ26nIGr5AYMKr_eaoxXWtDkngU8M8KXhqPQXkhyamMWJ1mvbeYU&usqp=CAU"} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 230,
    },
  
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: (params) => {
        return (
          <div>₹
            {params.row.price}
          </div>
        );
      },
    },
    { field: 'description', headerName: "Description", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  
  ];
  
  