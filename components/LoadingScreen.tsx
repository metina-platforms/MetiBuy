import colors from "tailwindcss/colors";
import { Box } from "./ui/box";
import { Spinner } from "./ui/spinner";



export default function LoadingScreen() {

    return (
        <Box className="flex-1 justify-center items-center bg-opacity-50 ">
            <Spinner size="small" color={colors.gray[500]} />
        </Box>
    )
}