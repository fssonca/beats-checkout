import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { postcodeValidator, emailValidator } from "../../utils/validatorPostcode";
import "./styles.scss";

export default () => {
  const [birthDate, setBirthDate] = useState<Date | null>(new Date("2001-01-01T00:00:00"));

  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    street: "",
    number: "",
    city: "",
    postcode: "",
    instructions: "",
  });

  const [birthDateIsValid, setBirthDateIsValid] = useState(true);
  const [postcodeIsValid, setPostcodeIsValid] = useState({ verified: false, valid: true });
  const [emaiIsValid, setEmailIsValid] = useState({ verified: false, valid: true });

  const handleChangeDate = (newValue: Date | null) => {
    setBirthDate(newValue);
  };

  const handleErrorDate = (e: null | string) => {
    // or just use setBirthDateIsValid(!!e)    ;)

    if (!e) {
      setBirthDateIsValid(true);
    } else {
      setBirthDateIsValid(true);
    }
  };

  const checkPostcode = async () => {
    if (!deliveryInfo.postcode) {
      return;
    }
    const isValid = await postcodeValidator(deliveryInfo.postcode);

    setPostcodeIsValid({ verified: true, valid: isValid });
  };

  const checkEmail = () => {
    const valid = emailValidator(deliveryInfo.email);
    setEmailIsValid({ verified: true, valid });
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [event.target.name]: event.target.value,
    });
  };

  const canSubmit = (): boolean => {
    // check if all fields have some empty value
    const hasEmptyValue = !Object.values(deliveryInfo).some((v) => v === "");
    if (!hasEmptyValue) {
      return false;
    }

    if (!birthDateIsValid) {
      return false;
    }

    if (emaiIsValid.verified && !emaiIsValid.valid) {
      return false;
    }

    if (!postcodeIsValid.verified || !postcodeIsValid.valid) {
      return false;
    }

    return true;
  };

  return (
    <div className="delivery-details">
      <h2>Delivery Information</h2>
      <hr />
      <br />

      <Container>
        <h5>Personal details</h5>
        <div className="box-row">
          <TextField
            id="outlined-basic"
            label="First Name"
            name="firstName"
            onChange={handleChangeText}
            variant="outlined"
            className="info-input"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            name="lastName"
            onChange={handleChangeText}
            variant="outlined"
            className="info-input"
          />
        </div>

        <div className="box-row">
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            onBlur={() => checkEmail()}
            onChange={handleChangeText}
            error={!emaiIsValid.valid}
            helperText={!emaiIsValid.valid ? <code>Type a valid email</code> : null}
            variant="outlined"
            className="info-input"
          />
          <TextField
            id="outlined-basic"
            label="Telephone"
            name="telephone"
            onChange={handleChangeText}
            variant="outlined"
            className="info-input"
          />
        </div>

        <div className="box-row">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date of Birth (dd/mm/yyyy)"
              inputFormat="dd/MM/yyyy"
              value={birthDate}
              onChange={handleChangeDate}
              onError={handleErrorDate}
              renderInput={(params) => <TextField {...params} className="info-input" />}
            />
          </LocalizationProvider>
        </div>

        <h5>Shipping address</h5>

        <div className="box-row">
          <TextField
            id="outlined-basic"
            label="Street"
            name="street"
            onChange={handleChangeText}
            variant="outlined"
            className="info-input max-width"
          />
        </div>

        <div className="box-row">
          <TextField
            id="outlined-basic"
            label="number"
            name="number"
            onChange={handleChangeText}
            variant="outlined"
            className="info-input"
          />
        </div>

        <div className="box-row">
          <TextField
            id="outlined-basic"
            label="City"
            name="city"
            onChange={handleChangeText}
            variant="outlined"
            className="info-input"
          />

          <TextField
            id="outlined-basic"
            label="Postcode"
            name="postcode"
            onChange={handleChangeText}
            onBlur={() => checkPostcode()}
            error={!postcodeIsValid.valid}
            helperText={!postcodeIsValid.valid ? <code>Type a valid postcode</code> : null}
            variant="outlined"
            className="info-input"
          />
        </div>

        <div className="box-row">
          <TextField
            id="outlined-basic"
            label="Delivery instructions"
            name="instructions"
            onChange={handleChangeText}
            variant="outlined"
            className="info-input max-width"
          />
        </div>

        <div className="box-row">{!canSubmit() && "Please fill out all the fields correctly"}</div>
        <div className="box-row">
          <Button variant="contained" disabled={!canSubmit()} className="submit-button">
            Next step: Payment
          </Button>
        </div>
      </Container>
    </div>
  );
};
