import React, { Component } from "react";



export default class Input extends Component {
    handleClick(diff) {
        console.log("handleClick")
        console.log("Curr " + this.props.value)
        var curr = this.props.value
        if ((diff === -1 && curr === 0) || (diff === 1 && curr === 10)) {
            console.log("return")
            return;
        } else {
            const new_value = curr + diff
            console.log(diff)
            this.props.onClick(new_value);
        }
    }

    render() {
        return (
            <div
                className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative"
            >
                <button
                    className="font-semibold border-r bg-red-300 hover:bg-red-600 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                    onClick={() => this.handleClick(-1)}
                >
                    <span className="m-auto">-</span>
                </button>
                <div
                    className="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default"
                >
                    <span>{this.props.value}</span>
                </div>

                <button
                    className="font-semibold border-l  bg-green-300 hover:bg-green-600 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                    onClick={() => this.handleClick(1)}
                >
                    <span className="m-auto">+</span>
                </button>
            </div>
        )
    }
}