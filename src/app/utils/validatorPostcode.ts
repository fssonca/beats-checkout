import { ajax } from "./ajax";

// https://postcodes.io/docs | Postcodes.io is a free postcode lookup API and geocoder for the UK

export const postcodeValidator = async (postcode: string): Promise<boolean> => {
  const urlEndpoint = "https://api.postcodes.io/";

  try {
    const data = await ajax.GET(`${urlEndpoint}postcodes/${postcode.replace(/\s/g, "")}`);

    // if http status = 200 (success), the postcode is valid (responses: https://postcodes.io/docs#Responses)
    return data.status === 200;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const emailValidator = (email: string): boolean => {
  // planned to use https://mailboxlayer.com/ - got unsatisfactory results

  var tester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!email) return false;

  var emailParts = email.split("@");

  if (emailParts.length !== 2) return false;

  var account = emailParts[0];
  var address = emailParts[1];

  if (account.length > 64) return false;
  else if (address.length > 255) return false;

  var domainParts = address.split(".");
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return false;

  if (!tester.test(email)) return false;

  return true;
};
