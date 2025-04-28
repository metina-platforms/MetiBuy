import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogBody, AlertDialogBackdrop } from "@/components/ui/alert-dialog";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import React from "react";
import { Input, InputField } from "../ui/input";
	
  /**
   * @function ErrorModal
   * @description Modal component for verifying the deletion of a post.
   * @param {Object} props Component props
   * @param {Function} props.onClose Function to call when the modal is closed
   * @param {boolean} props.isOpen Whether the modal is open or not
   * @returns {ReactElement} The modal component
   */
function ErrorModal({onClose, isOpen, icon, title, description }: {onClose: () => void, isOpen: boolean, icon: React.ReactNode, title: string, description: string}){
       
          return (
            <>
              <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
                size="sm" 
              >
                <AlertDialogBackdrop />
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <Heading className="text-typography-950 font-semibold text-center w-full" size="md">
                      {title}
                    </Heading>
                  </AlertDialogHeader>
                  <AlertDialogBody className="mt-3 mb-4 flex gap-2">
                    {icon && icon}
                    <Text className="text-center" size="sm">
                      {description}
                    </Text>

                  </AlertDialogBody>
                  <AlertDialogFooter className="">
                    <Button
                      variant="outline"
                      action="secondary"
                      onPress={onClose}
                      size="sm"
                    >
                      <ButtonText>Cancel</ButtonText>
                    </Button>
                    <Button size="sm" onPress={onClose}>
                      <ButtonText>Delete</ButtonText>
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          );
        }

export default ErrorModal