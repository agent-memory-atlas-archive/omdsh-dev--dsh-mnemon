import type { MemoryMutationCompletion, MemoryOperationScope, MemoryReceiptStatus } from './index.ts'

/** Operation metadata for optional feedback plugins. Never includes prompts, grants or record bodies. */
export interface MemoryOperationObservation {
  id: string
  occurredAt: string
  scope: MemoryOperationScope
  sourceInstanceKey: string
  sourceTypeId: string
  operation: string
  kind: 'read' | 'mutation' | 'management'
  actor: 'model' | 'operator'
  viewId?: string
  recordIds: string[]
  revision?: string
  status?: MemoryReceiptStatus
  completion?: MemoryMutationCompletion
}

export type MemoryOperationObserver = (observation: Readonly<MemoryOperationObservation>) => void
