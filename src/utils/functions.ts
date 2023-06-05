import { IInput } from "@/types/input.interface";

export const convertEmail = (email: string): string => {
  const [username, domain] = email.split("@");
  const [domainPart, address] = domain.split(".");
  const firstChar = username.charAt(0);

  const maskedUsername = firstChar.toUpperCase() + username.slice(1);
  const maskedDomain =
    domainPart.slice(0, 1) + domainPart.slice(1).replace(/./g, "*");
  return maskedUsername + "@" + maskedDomain + "." + address;
};

export const checkInputNumeric = (inputs: IInput[]) => {
  const allNotEmpty = inputs.every((input) => input.value);
  return allNotEmpty;
};

export const calculateNumbers = (inputs: IInput[]) => {
  return inputs.reduce((acc, input) => acc + Number(input.value), 0);
};

// export const restrictAlphabets = (event: any) => {
//   const x = event.which || event.keyCode;
//   if (x >= 48 && x <= 57) {
//     console.log(x);
//     return true;
//   } else {
//     return false;
//   }
// };
