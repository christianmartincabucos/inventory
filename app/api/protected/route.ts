import { auth } from "auth"

export const GET = auth((req: any) => {
    if (req.auth) {
        return Response.json({data: "Protected data"})
    }

    return Response.json({error: "Unauthorized"}, { status: 401})
}) as any

