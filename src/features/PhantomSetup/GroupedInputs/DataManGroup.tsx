import React, { useEffect } from "react"
import { SubSection } from "../SubSection"

import { InputRadioGroup, InputRadioOption, InputFieldNumber } from "../Inputs"
import { Text } from "../Text"
import { ManageFoldersType } from "../d"
import { useSetupContext } from "../../../contexts/setupContext"

export const DataManGroup = () => {
  const { data, updateField } = useSetupContext()

  // update input within a radio option (consider using a hook)
  useEffect(() => {
    // ensure that if that radio option is chosen, that the related foldes field receives a value
    if (data["manageFolders"] === ManageFoldersType.Create) {
      // mini validation implementation
      if (!(data["keepNFolders"] >= 1) || !(data["keepNFolders"] <= 500)) {
        updateField("keepNFolders", 20)
      }
    } else {
      updateField("keepNFolders", 0)
    }
  }, [data["manageFolders"], data["keepNFolders"]])

  return (
    <SubSection heading="Data management" columnView={false}>
      <InputRadioGroup mappedName="manageFolders" className="tw-ml-10">
        <InputRadioOption value={ManageFoldersType.Keep}>
          Mix old and new files (add new data to already-existing dataset)
        </InputRadioOption>
        <InputRadioOption warning value={ManageFoldersType.Delete}>
          Delete all previous files at each launch, and restart processing
          information from the beginning
        </InputRadioOption>
        <InputRadioOption warning value={ManageFoldersType.Create}>
          <Text variant="label-sm">
            Create new files at each launch, and restart processing information
            from the beginning, and keep the last
            <InputFieldNumber
              inline
              smaller
              mappedName={"keepNFolders"}
              className="tw-text-center tw-mx-2"
            />
            folders
          </Text>
        </InputRadioOption>
      </InputRadioGroup>
    </SubSection>
  )
}
