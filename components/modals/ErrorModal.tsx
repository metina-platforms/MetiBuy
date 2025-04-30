import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogBody, AlertDialogBackdrop } from "@/components/ui/alert-dialog";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import React from "react";
import { Input, InputField } from "../ui/input";
import {VStack} from "@/components/ui/vstack";
	
  /**
   * @function ErrorModal
   * @description Modal component for verifying the deletion of a post.
   * @param {Object} props Component props
   * @param {Function} props.onClose Function to call when the modal is closed
   * @param {boolean} props.isOpen Whether the modal is open or not
   * @returns {ReactElement} The modal component
   */
export default function ErrorModal({onClose, isOpen, icon, title, description, action }: {onClose: () => void, isOpen: boolean, icon: React.ReactNode, title: string, description: string, action?: React.ReactNode }){
       
          return (
            <>
              <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
                size="sm" 
              >
                <AlertDialogBackdrop />
                <AlertDialogContent>
                  <AlertDialogHeader className="flex gap-2 items-center bg-gray-600">


                  </AlertDialogHeader>
                  <AlertDialogBody className="mt-3 mb-4 flex gap-2">
                      <VStack className="flex gap-2 items-center">
                          {icon && icon}

                          <Heading className="text-typography-950 font-semibold text-center w-full" size="md">
                              {title}
                          </Heading>
                      </VStack>
                    <Text className="text-center" size="sm">
                      {description}
                    </Text>

                  </AlertDialogBody>
                  <AlertDialogFooter className="items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      action="secondary"
                      onPress={onClose}
                      size="sm"
                    >
                      <ButtonText>Cancel</ButtonText>
                    </Button>
                      {
                          action && action
                      }
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          );
        }

