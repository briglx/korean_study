#!/usr/bin/python
"""Main script."""
import argparse
import asyncio

from dotenv import load_dotenv

load_dotenv()


async def main():
    """Fetch main data."""
    print("hello")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Korean Study.",
        add_help=True,
    )

    asyncio.run(main())
