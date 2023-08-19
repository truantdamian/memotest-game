import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const urlQuery = new URL(request.url);
  const searchParams = new URLSearchParams(urlQuery.search);
  const per_page = searchParams.get("per_page");

  const items = parseInt(per_page) <= 20 ? parseInt(per_page) : 20;

  const url = `https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=${items}`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const { entries } = await response.json();

  const result = entries.map((x) => {
    const { fields } = x;
    const { image } = fields;

    return { uuid: image.uuid, url: image.url, title: image.title };
  });

  return NextResponse.json(result);
}
