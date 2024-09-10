import '@testing-library/jest-dom'
import './styles/globals.css'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

expect.extend({ toMatchImageSnapshot })
