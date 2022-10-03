import React from "react"
import { Aside } from "../"
import { StepBody } from "../"
import { Routes, Route, Navigate } from "react-router-dom"

import { StepType } from "../../../../pages/LiPhantomSetupOrig/data"
import { makeUrlPath } from "../../../../utils"

interface SettingsProps {
  children?: React.ReactNode
  steps: StepType[]
}

export const Settings = ({ steps }: SettingsProps) => {
  return (
    <div className='tw-flex tw-flex-col lg:tw-flex-row tw-mt-4 md:tw-mt-8 tw-space-y-4 lg:tw-space-y-0 lg:tw-space-x-2'>
      <Aside steps={steps} />
      <main className='tw-w-full tw-mt-4 md:tw-mt-0 md:tw-flex-[1_1_auto] tw-bg-white tw-rounded-xl tw-p-5 tw-shadow-card'>
        <Routes>
          <Route path='step/'>
            <Route
              index
              element={<Navigate to={makeUrlPath(steps[0].title)} replace />}
            />
            <Route
              path='*'
              element={<Navigate to={makeUrlPath(steps[0].title)} replace />}
            />
            {steps.map((step, i) => {
              return (
                <Route
                  key={i}
                  path={makeUrlPath(step.title) + "/*"}
                  // element={step.content}
                  element={
                    <StepBody
                      title={step.title}
                      content={step.content}
                      prevStepPath={
                        i > 0 && "../" + makeUrlPath(steps[i - 1].title)
                      }
                      nextStepPath={
                        i < steps.length - 1 &&
                        "../" + makeUrlPath(steps[i + 1].title)
                      }
                    />
                  }
                />
              )
            })}
          </Route>
        </Routes>
      </main>
    </div>
  )
}
