export interface EndUserProps {

}

export interface AllProps extends EndUserProps{}

export interface Actions {
    handleSlotChange(evt: Event, self: AllProps): void;
}