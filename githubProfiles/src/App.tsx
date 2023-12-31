import { Input } from "@/components/ui/input.tsx";
import { Card, CardContent, CardHeader } from "@/components/ui/card.tsx";
import { SetStateAction, useState } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import RepoList from "./components/RepoList";

const client = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    Authorization: "Bearer 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",
    "Content-Type": "Application/json",
  },
});

type profileData = {
  bio: string,
  followers: number,
  following: number,
  name: string,
  blog: string,
  avatar_url: string,
  public_repos: number
}

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [profileData, setProfileData] = useState(undefined);

  function handleKeyDown(event: { key: string; target: { value: SetStateAction<string>; }; }) {
    console.log(event.key);
    if (event.key == "Enter") {
      searchProfile(searchKey);
      setSearchKey("");
      return;
    }
    setSearchKey(event.target.value);
  }

  function handleOnchange(event: { target: { value: SetStateAction<string>; }; }) {
    setSearchKey(event.target.value);
  }

  async function searchProfile(text: string) {
    let data = null;
    let repoData = null;
    try {
      data = await client.get(text, {
        headers: {
          'Access-Control-Allow-Origin': false,
        }
      });
      repoData = await getRepos(text);

    } catch (error) {
      setProfileData(null);
      return;
    }
    console.log(data.data);
    setProfileData((prevData) => {
      prevData = data.data;
      prevData.repo = repoData.data;
      return prevData;
    });
    // getRepos(text);
  }

  async function getRepos(text: string) {
    let data = null;
    try {
      data = await client.get(text + "/repos?sort=created");
      // setProfileData((prevData) => {
      //  return prevData.repo = data.data; 
      // });
      // console.log(profileData);
      return data;
    } catch (error) {
      return;
    }
  }

  return (
    <main className="min-h-screen overflow-hidden text-center bg-black space-y-4 flex flex-col justify-center items-center ">
      <Input
        placeholder="Search a Github User"
        type="text"
        className=" w-[20rem] md:w-[25rem]"
        onChange={handleOnchange}
        onKeyDown={handleKeyDown}
        value={searchKey}
      />
      {!!profileData && (
        <Card className="w-[20rem] md:w-[30rem]">
          <CardHeader className=" space-x-2 flex-row items-center">
            <Avatar className=" h-16 w-16 border border-primary border-2">
              <AvatarImage src={profileData.avatar_url} />
              <AvatarFallback>profileData</AvatarFallback>
            </Avatar>
            <h2 className="font-extrabold text-3xl">{profileData.name}</h2>
          </CardHeader>
          <CardContent>
            {!!profileData.bio && (
              <p className="text-left mb-2">{profileData.bio}</p>
            )}
            <p className="text-left">
              {!!profileData.blog && (
                <a className="text-primary" href={profileData.blog}>
                  {profileData.blog}
                </a>
              )}
            </p>
            <ul className="mt-2 flex space-x-2 items-center justify-center ">
              <Badge>Followers {profileData.followers}</Badge>
              <Badge>Following {profileData.following}</Badge>
              <Badge>Repos {profileData.public_repos}</Badge>
            </ul>
            {!!profileData.repo && (
              <><h3 className="text-secondary-foreground mt-2 font-bold"> Public Repos</h3><RepoList num={profileData.public_repos} data={profileData.repo}></RepoList></>
            )}
          </CardContent>
        </Card>
      )}
      {profileData === null && (
        <Card className="w-[20rem] md:w-[30rem]">
          <CardHeader className=" space-x-2 flex-row items-center">
            <h2 className="font-extrabold text-3xl">No profile Data found !</h2>
          </CardHeader>
        </Card>
      )}
    </main>
  );
}

export default App;
