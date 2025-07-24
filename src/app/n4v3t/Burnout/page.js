"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);
  useEffect(() => {
    const storage = localStorage.getItem("N4V3T");
    if (
      storage !==
      "4323f71098015c2dbaded5a561477e030188f0999377bfe05ac362d59e4b03a0"
    ) {
      router.replace("/login");
    } else {
      setAccess(true);
    }
  }, []);

  const fileList = [
    { name: "v̶̡̯ͥ̆ͪ̚_̴̡̡̺͖͓͓̪̝͉̱̼̬͎̳̗ͤ̂̇̀̅͆͑̊ͤ̓ͮ͘̕͜ḭ̷̩̦̲͍̘̒ͪ̒͐̽ͥ͒̚̕s̵̈́͋̐ṷ̵̷̷̧̡̫̼̥̱̲̜͕́ͥ̅̎̐̑ͫ̽ͩ̎̃͘͡͠͡_̨̬̲̐ͤͦ̀͐e̶͎̊ͤl̨̢̞̙̗̭͖͖̺̟̫͎̞̦͙̓͗ͬ̏ͧ̇̒͂̅͒̑͆ͪͣ͟͡͡.png", type: "image", path: "/fileContent/bo1.jpg" },
    { name: "į̵̢̝̱͖͉̥͇̞̜̭͕̺̭̼̪̟̻͖̯͕̱̥̃̈́̊̃̈̀̓͑ͥͤͦ̉ͤ̚͢͢͝͠ͅm̴̷͇̜̙͇͚͓͍ͦ́͌̉̐ͧͧ͝aͬg̬͉̬ͨ͗̑̔̓ͬ͆́͒̈́͞͞_́̄_̶͔̘̳̼͈̙̭̹̝̙̝̎̃͂͆̒̄̊̀̃̉̿͟͡ę̸̱̺̳̪̯̽̀̈͐̐̋̀̊ͣ̂͘2̸̬̦̓̃͗̄͟_̢̱̥͉̯̻͊̔ͮ̆ͨ͛͗̊̉͑̓_̵̪̜͕͚̠̺̎ͮ_.jpg", type: "image", path: "/fileContent/bo2.jpg" },
    { name: "s̘̭̥̞͔̬͈̩͌̀̆̚̕͢͡͞ḉ̶̡̳͖̣̲̹͇̹̜͔̰̞̺͉̳̥ͨ̽̓̒̐̈́̓̈́͋ͪ̃ͤͭ̐ͧͬ̉̃̈́ͨ́ͥ̑ͪ̕͟͢ŗ̶̴̘̱͙͍̮̖̌̌́̏ͫͫ͑̈́̕͟͡ȩ̶̵̶̵̵̡̯̩̻̺͎̞̣͓̜̹̯̒ͭ̍ͭ̃̑͆̎̀̄̾̕̚͠ͅe̸̺̬̠͛͋ͩ̆͆n̵̢̲͔͎̮̂͊ͣ́͐̒̄̊̚͜͡š̴̸̴̨̢̨̛͚̻̰̦̮̩̗̙̜̺̰͎́̑ͨ́̎̿ͮͩ͊͒ͧ̊͒ͪ͂̚ͅh̵̴̨̪̜̣̞̝̝̼̪̙̥̝̻̽̌̉͑̀͌ͨ́͗͛ͩ̾͐ͨ͗ͨ̀̀ͮ͊ͯ͐ͦ͠ȯ̢̧̳̦̙̝͉̲͔͎̥̰̤̼͉͖̝̗̓͐̌̎ͤͯ̏̽͋͒̊̆̂͋̓́̃͐͛͜͡ͅ_̵ţ̴̧̧̡̛̥̗͕̣̥͖͈̩̼̫͍̗͓͇͙̠ͤ͋̒ͩͯͨ͛̿̋̅̽̋̈́̒̈ͤͤ̚͡͝͠ͅͅͅ3̷͇͚̗̖͚̯͉̟̖̰̙̗̫̝̲͇̈͗͒̀̈ͣ̊͛̑́̚.jpg", type: "image", path: "/fileContent/bo3.jpg" },
    { name: "å̷̖̯̜̘͔͈̞̻̥͉̙̥̣̄͂ͮ͂͂ͭ́̓̀͌̏̌̽̔̇̄̍̔͋͒̚̚͜r͎̮ͭ̌c̷̢̱̯̙̺͂̔̀̂͊̓́ͧ͗ͨ̈̀̀͊̌̚h̵̡̛̝̰̞͔͕ͪ̔ͥ͆͋̄ͬ̑ͯ͛̊͟i̴̥̳̳̣̥̠̯͇ͧ̌̅ͯ͒͗͂̍v̸̡̧̗̺͈ͧ̽̔͂͘_̡̝̥͚̱̖̟̙̱͙͎̦̯ͭͮ̽ͮͦ͘͝ě̸̢̘̙̣̹͍͒̃̆ͪ͝4͍͇̱̝̇̀̆̀̚.png", type: "image", path: "/fileContent/bovi.jpg" },
  ];

  return <>{access && <FileBrowser fileList={fileList} title="Burnout" />}</>;
}
