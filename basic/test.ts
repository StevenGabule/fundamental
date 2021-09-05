var t: number = 1;

enum Color { Red, Green, Blue };
var c: Color = Color.Blue;

interface ICustomConsole {
  log(arg: string): void;
}

declare var customConsole: ICustomConsole;
customConsole.log("A log entry!!!");


enum AlertLevel {
  info,
  warning,
  error
}

function getAlertSubbscribers(level: AlertLevel) {
  var emails = new Array<string>();
  switch (level) {
    case AlertLevel.info:
      emails.push("cs@domain.com")
      break;
    case AlertLevel.warning:
      emails.push("development@domain.com")
      emails.push("sysadmin@domain.com")
      break;
    case AlertLevel.error:
      emails.push("development@domain.com")
      emails.push("sysadmin@domain.com")
      emails.push("management@domain.com")
    default:
      throw new Error("Invalid argument!")
  }
  return emails;
}

getAlertSubbscribers(AlertLevel.info);
getAlertSubbscribers(AlertLevel.warning);