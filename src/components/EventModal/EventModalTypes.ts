export interface IEventModalProps {
  openModal: boolean;
  modalClose: () => void;
  name: string;
  id: string;
  year?: string;
  phone?: string;
  messengers?: string[];
  address?: string;
  socials?: string;
  email?: string;
  textarea?: string;
  photo?: string;
  day?: string;
  month?: string;
  modifiedMonth?: string;
}
