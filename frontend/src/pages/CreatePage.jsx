import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const CreatePage = () => {
  return (
    <div className="w-full h-3/4 max-w-7xl mx-auto flex justify-center items-center  border-2">
      <div className="w-[50%] h-auto p-4 flex flex-col gap-5 border-2">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" color="success" size="large">
          Large
        </Button>
      </div>
    </div>
  );
};

export default CreatePage;
