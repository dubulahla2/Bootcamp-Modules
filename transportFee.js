export default function transportFee(rightPrice){
    switch(rightPrice){
      case "morning":
        return "R20"
        break;
      case "afternoon":
        return "R10"
        break;
      default:
        return "free";
                     }
    }
    console.log(transportFee("morning"))
    