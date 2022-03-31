import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";

const axios = require("axios");

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(value, { setSubmitting }) => {
        setSubmitting(false);
        console.log(value);
        axios({
          method: "post",
          url: "/login",
          data: value,
        }).then(function (res) {
          console.log(res.data);
        });
      }}
    >
      {(formik) => (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <TextField
                variant="outlined"
                label="Username"
                InputProps={{
                  id: "username",
                  ...formik.getFieldProps("username"),
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label="Password"
                InputProps={{
                  id: "password",
                  type: "password",
                  ...formik.getFieldProps("password"),
                }}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
};

export default function Login(props) {
  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <Paper variant="outlined" sx={{ "&": { p: 5, width: "50ch" } }}>
            <Grid
              container
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid item>
                <Typography component={"h2"} variant="h5">
                  Login
                </Typography>
              </Grid>
              <Grid item>
                {" "}
                <LoginForm />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
