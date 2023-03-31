import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {

  return (
    <div>
      <div>
        <Button primary outline rounded >
          <GoBell />
          Yoyoyo
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Click
        </Button>
      </div>
      <div>
        <Button warning outline rounded>
          MEEEEE
        </Button>
      </div>
      <div>
        <Button danger>NOWWWW</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
