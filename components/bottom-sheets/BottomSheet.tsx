
import {
    BottomSheet,
    BottomSheetBackdrop,
    BottomSheetContent,
    BottomSheetDragIndicator,
    BottomSheetItem,
    BottomSheetItemText,
    BottomSheetPortal,
    BottomSheetTrigger,
} from '@/components/ui/bottomsheet';



export default () => (
    <BottomSheet>
        <BottomSheetTrigger>
            <Text>Open BottomSheet</Text>
        </BottomSheetTrigger>
        <BottomSheetPortal
            snapPoints={['25%', '50%']}
            backdropComponent={BottomSheetBackdrop}
            handleComponent={BottomSheetDragIndicator}
        >
            <BottomSheetContent>
                <BottomSheetItem>
                    <BottomSheetItemText>Item 1</BottomSheetItemText>
                </BottomSheetItem>
                <BottomSheetItem>
                    <BottomSheetItemText>Item 2</BottomSheetItemText>
                </BottomSheetItem>
                <BottomSheetItem>
                    <BottomSheetItemText>Item 3</BottomSheetItemText>
                </BottomSheetItem>
            </BottomSheetContent>
        </BottomSheetPortal>
    </BottomSheet>
);